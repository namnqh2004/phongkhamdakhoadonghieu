import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
//   FaArrowRightLong,
  FaChevronDown,
  FaMagnifyingGlass,
} from "react-icons/fa6";
// import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";

const categoryMeta = {
  0: {
    title: "Khám bệnh",
    description: "Dịch vụ khám bệnh cơ bản và chuyên khoa",
  },
  1: {
    title: "Xét nghiệm",
    description: "Xét nghiệm huyết học, sinh hóa, sinh học phân tử",
  },
  2: {
    title: "Chẩn đoán hình ảnh",
    description: "Siêu âm, CT, MRI, X-Quang và các kỹ thuật hình ảnh",
  },
  3: {
    title: "Thăm dò chức năng",
    description: "Điện tim, điện não, điện cơ và thăm dò chức năng khác",
  },
  18: {
    title: "Thủ thuật",
    description: "Thủ thuật can thiệp không phẫu thuật",
  },
  8: {
    title: "Phẫu thuật",
    description: "Phẫu thuật và kỹ thuật điều trị xâm lấn",
  },
};

const orderedCategories = [0, 1, 2, 3, 18, 8];

const formatPrice = (value) => {
  const amount = Number(value);
  if (Number.isNaN(amount)) return value;
  return amount.toLocaleString("vi-VN");
};

const GroupAccordion = ({
  title,
  description,
  itemCount,
  id,
  isOpen,
  onToggle,
  children,
}) => (
  <div className="mb-6 rounded-[30px] overflow-hidden border border-[#e5e7eb] bg-white shadow-[0_20px_80px_rgba(36,52,89,0.06)]">
    <button
      type="button"
      onClick={() => onToggle(id)}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-[#f8fafc] hover:bg-[#eef2ff] transition-colors"
    >
      <div>
        <div className="text-xl lg:text-2xl font-semibold text-[#0f172a]">
          {title}
        </div>
        <div className="mt-1 text-sm text-[#475569]">{description}</div>
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-sm font-medium text-[#2563eb]">
          {itemCount} mục
        </span>
        <FaChevronDown
          className={`transition-transform duration-300 text-[#0f172a] ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1600px] opacity-100" : "max-h-0 opacity-0"}`}
    >
      <div className="px-6 pb-6 pt-4 lg:px-8">{children}</div>
    </div>
  </div>
);

const PriceListInner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRows, setPriceRows] = useState([]);
  const [openGroups, setOpenGroups] = useState({ 0: true });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL || "/"}data/tableConvert.com_j01ce0.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPriceRows(
          data
            .filter((row) => row.NHOM !== undefined && row.NHOM !== null)
            .map((row) => ({
              ...row,
              NHOM: Number(row.NHOM),
              TEN_DVKT_GIA: String(row.TEN_DVKT_GIA || "").trim(),
              DON_VI_TINH: String(row.DON_VI_TINH || "").trim(),
            })),
        );
      })
      .catch(() => {
        setPriceRows([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredGroups = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    const groupMap = orderedCategories.reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {});

    priceRows.forEach((row) => {
      const groupKey = orderedCategories.includes(row.NHOM) ? row.NHOM : null;
      if (groupKey === null) return;
      if (!categoryMeta[groupKey]) return;
      if (!query) {
        groupMap[groupKey].push(row);
        return;
      }
      const text =
        `${row.TEN_DVKT_GIA} ${row.MA_TUONG_DUONG} ${row.DON_VI_TINH}`.toLowerCase();
      if (text.includes(query)) {
        groupMap[groupKey].push(row);
      }
    });

    return orderedCategories
      .map((groupKey) => ({
        groupKey,
        title: categoryMeta[groupKey]?.title || `Nhóm ${groupKey}`,
        description: categoryMeta[groupKey]?.description || "",
        items: groupMap[groupKey].sort(
          (a, b) => Number(a.STT || 0) - Number(b.STT || 0),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [priceRows, searchTerm]);

  useEffect(() => {
    if (!loading && filteredGroups.length) {
      const openState = {};
      filteredGroups.forEach((group, index) => {
        openState[group.groupKey] = index === 0;
      });
      setOpenGroups(openState);
    }
  }, [filteredGroups, loading]);

  const handleToggleGroup = (groupKey) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  return (
    <>
      {/* <BreadCrumb
        breadCrumbTitle="Bảng Giá Dịch Vụ"
        breadCrumbIcon={<FaArrowRightLong />}
        url="/priceList"
        breadCrumbLink="Bảng Giá"
      /> */}

      <section className="bg-BodyBg-0 md:py-16 py-10">
        <div className="Container">
          <div className="mx-auto max-w-6xl space-y-8">
            {/* Banner */}
            <div className="rounded-[30px] bg-gradient-to-r from-[#0e7a33] via-[#138a3d] to-[#16a34a] p-6 md:p-12 text-center text-white shadow-xl">
              <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs md:text-sm uppercase font-bold tracking-[0.24em] text-white/90">
                Giá cập nhật theo Nghị Quyết số 122/NQHĐND ngày 06/12/2024
              </span>

              <h2 className="mt-6 md:mt-8 text-3xl md:text-5xl font-bold">
                Bảng Giá Dịch Vụ Khám Bệnh Chữa Bệnh
              </h2>

              <p className="mt-4 text-sm md:text-lg text-white/90 max-w-3xl mx-auto">
                Tra cứu nhanh hơn 600 dịch vụ y tế (Áp dụng cho đối tượng có thẻ BHYT)
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-3xl bg-white/10 p-5">
                  <div className="text-3xl md:text-4xl font-semibold">6</div>
                  <div className="mt-2 text-sm text-white/90">Nhóm dịch vụ</div>
                </div>

                <div className="rounded-3xl bg-white/10 p-5">
                  <div className="text-3xl md:text-4xl font-semibold">600+</div>
                  <div className="mt-2 text-sm text-white/90">
                    Dịch vụ tra cứu
                  </div>
                </div>

                <div className="rounded-3xl bg-white/10 p-5">
                  <div className="text-3xl md:text-4xl font-semibold">---</div>
                  <div className="mt-2 text-sm text-white/90">
                    Giá BHYT
                  </div>
                </div>
              </div>
            </div>
            {/* Search */}
            <div className="rounded-[30px] border border-[#e2e8f0] bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#0e7a33]">
                    Tìm kiếm dịch vụ
                  </h3>

                  <p className="mt-2 text-sm text-[#475569]">
                    Tìm theo tên dịch vụ, mã dịch vụ hoặc đơn vị tính.
                  </p>
                </div>

                <div className="relative w-full max-w-xl">
                  <FaMagnifyingGlass className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b]" />

                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Tìm tên dịch vụ... (VD: siêu âm, xét nghiệm, CT...)"
                    className="w-full rounded-full border border-[#cbd5e1] bg-[#f8fafc] py-4 pl-12 pr-5 text-sm text-[#0f172a] outline-none transition focus:border-[#0e7a33] focus:ring-4 focus:ring-[#0e7a33]/10 focus:bg-white"
                  />
                </div>
              </div>
            </div>
            {loading ? (
              <div className="rounded-[30px] border border-[#e2e8f0] bg-white p-10 text-center text-[#475569]">
                Đang tải dữ liệu bảng giá ...
              </div>
            ) : filteredGroups.length === 0 ? (
              <div className="rounded-[30px] border border-[#e2e8f0] bg-white p-10 text-center text-[#475569]">
                Không tìm thấy dịch vụ phù hợp. Vui lòng thử lại với từ khóa
                khác.
              </div>
            ) : (
              filteredGroups.map((group) => (
                <GroupAccordion
                  key={group.groupKey}
                  id={group.groupKey}
                  title={group.title}
                  description={group.description}
                  itemCount={group.items.length}
                  isOpen={Boolean(openGroups[group.groupKey])}
                  onToggle={handleToggleGroup}
                >
                  <div className="overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white">
                    {/* Header Desktop */}
                    <div className="hidden md:grid grid-cols-[60px_180px_1fr_120px_160px] gap-3 bg-[#f0fdf4] px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#0e7a33]">
                      <div>STT</div>
                      <div>Mã DVKT</div>
                      <div>Tên dịch vụ</div>
                      <div>Đơn vị tính</div>
                      <div>Giá BHYT</div>
                    </div>

                    <div className="divide-y divide-[#e2e8f0]">
                      {group.items.map((item, index) => (
                        <div
                          key={`${group.groupKey}-${item.STT}-${index}`}
                          className="transition hover:bg-[#f8fafc]"
                        >
                          {/* Mobile */}
                          <div className="block md:hidden p-4">
                            <div className="rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
                              <div className="mb-3 flex items-center justify-between">
                                <span className="text-sm font-semibold text-[#0e7a33]">
                                  #{index + 1}
                                </span>

                                <span className="rounded-full bg-[#0e7a33]/10 px-3 py-1 text-xs font-medium text-[#0e7a33]">
                                  {item.DON_VI_TINH || "-"}
                                </span>
                              </div>

                              <div className="space-y-3">
                                <div>
                                  <div className="text-xs text-slate-500">
                                    Mã DVKT
                                  </div>

                                  <div className="font-medium text-slate-800">
                                    {item.MA_TUONG_DUONG || "-"}
                                  </div>
                                </div>

                                <div>
                                  <div className="text-xs text-slate-500">
                                    Tên dịch vụ
                                  </div>

                                  <div className="font-semibold text-slate-700">
                                    {item.TEN_DVKT_GIA || "-"}
                                  </div>
                                </div>

                                <div className="flex items-center justify-between border-t pt-3">
                                  <span className="text-sm text-slate-500">
                                    Giá BHYT
                                  </span>

                                  <span className="text-lg font-bold text-[#0e7a33]">
                                    {formatPrice(item.DON_GIA)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Desktop */}
                          <div className="hidden md:grid grid-cols-[60px_180px_1fr_120px_160px] gap-3 items-center px-5 py-4">
                            <div className="font-medium text-slate-700">
                              {index + 1}
                            </div>

                            <div className="text-slate-700">
                              {item.MA_TUONG_DUONG || "-"}
                            </div>

                            <div className="font-semibold text-slate-700">
                              {item.TEN_DVKT_GIA || "-"}
                            </div>

                            <div className="text-slate-700">
                              {item.DON_VI_TINH || "-"}
                            </div>

                            <div className="font-semibold text-[#0e7a33]">
                              {formatPrice(item.DON_GIA)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </GroupAccordion>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

GroupAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  itemCount: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.node,
};

GroupAccordion.defaultProps = {
  description: "",
  children: null,
};

export default PriceListInner;
