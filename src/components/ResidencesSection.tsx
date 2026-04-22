import { useMemo, useState } from "react";
import { CircleArrowRight } from "lucide-react";
import fp1 from "@/assets/floorplan-option1.png";
import fp2 from "@/assets/floorplan-units1.png";
import fp3 from "@/assets/floorplan-option2.png";
import fp4 from "@/assets/floorplan-units2.png";
import { Reveal } from "@/components/Reveal";

type ResidenceOption = {
  id: string;
  bhk: "1.5" | "2.5";
  facing: "East" | "West";
  option: "Option 1" | "Option 2" | "Option 3";
  area: string;
  image: string;
};

const residenceOptions: ResidenceOption[] = [
  { id: "15e1", bhk: "1.5", facing: "East", option: "Option 1", area: "1110 SQ FT", image: fp1 },
  { id: "15e2", bhk: "1.5", facing: "East", option: "Option 2", area: "1145 SQ FT", image: fp2 },
  { id: "15e3", bhk: "1.5", facing: "East", option: "Option 3", area: "1180 SQ FT", image: fp3 },
  { id: "15w1", bhk: "1.5", facing: "West", option: "Option 1", area: "1125 SQ FT", image: fp4 },
  { id: "15w2", bhk: "1.5", facing: "West", option: "Option 2", area: "1160 SQ FT", image: fp2 },
  { id: "15w3", bhk: "1.5", facing: "West", option: "Option 3", area: "1195 SQ FT", image: fp1 },
  { id: "25e1", bhk: "2.5", facing: "East", option: "Option 1", area: "1490 SQ FT", image: fp3 },
  { id: "25e2", bhk: "2.5", facing: "East", option: "Option 2", area: "1540 SQ FT", image: fp4 },
  { id: "25e3", bhk: "2.5", facing: "East", option: "Option 3", area: "1590 SQ FT", image: fp1 },
  { id: "25w1", bhk: "2.5", facing: "West", option: "Option 1", area: "1510 SQ FT", image: fp2 },
  { id: "25w2", bhk: "2.5", facing: "West", option: "Option 2", area: "1560 SQ FT", image: fp3 },
  { id: "25w3", bhk: "2.5", facing: "West", option: "Option 3", area: "1615 SQ FT", image: fp4 },
];

const ResidencesSection = () => {
  const [selectedBhk, setSelectedBhk] = useState<"1.5" | "2.5">("1.5");
  const [selectedFacing, setSelectedFacing] = useState<"East" | "West">("East");
  const [activeId, setActiveId] = useState("15e1");

  const filteredOptions = useMemo(
    () =>
      residenceOptions.filter(
        (item) => item.bhk === selectedBhk && item.facing === selectedFacing
      ),
    [selectedBhk, selectedFacing]
  );

  const activeResidence = useMemo(
    () => filteredOptions.find((item) => item.id === activeId) ?? filteredOptions[0],
    [activeId, filteredOptions]
  );

  const onChangeBhk = (bhk: "1.5" | "2.5") => {
    setSelectedBhk(bhk);
    const next = residenceOptions.find((item) => item.bhk === bhk && item.facing === selectedFacing);
    if (next) {
      setActiveId(next.id);
    }
  };

  const onChangeFacing = (facing: "East" | "West") => {
    setSelectedFacing(facing);
    const next = residenceOptions.find((item) => item.bhk === selectedBhk && item.facing === facing);
    if (next) {
      setActiveId(next.id);
    }
  };

  const handleDownloadCostSheet = () => {
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "Swasti-Sri-Serenity-Cost-Sheet.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="residences"
      className="py-20 md:py-22 px-6 overflow-hidden"
     
    >
      <div className="container mx-auto max-w-6xl">
        <Reveal animation="up">
          <div className="text-center mb-12">
            <p className="text-[#8d5d3d] tracking-[0.25em] uppercase text-xs md:text-sm font-semibold mb-3">Pricing Matrix</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#203137] mb-3">All Residences</h2>
            <p className="text-[#4a5b60] text-base md:text-lg">Choose your preferred configuration, orientation, and area option.</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-10 items-start">
          <Reveal animation="left">
            <div className="rounded-3xl border border-[#d8c7b2] bg-[#fffaf3]/90 backdrop-blur-sm p-5 md:p-7 shadow-[0_18px_55px_-28px_rgba(43,49,64,0.45)]">
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-[#203137] mb-6">Select Your Unit</h3>

              <div className="grid grid-cols-2 gap-3 mb-3">
                {(["1.5", "2.5"] as const).map((bhk) => (
                  <button
                    key={bhk}
                    onClick={() => onChangeBhk(bhk)}
                    className={`h-12 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 ${
                      selectedBhk === bhk
                        ? "bg-[#203137] text-white shadow-[0_12px_28px_-16px_rgba(32,49,55,0.9)]"
                        : "bg-[#f8efe4] text-[#2f4146] border border-[#d9c7b3] hover:bg-white"
                    }`}
                  >
                    {bhk} BHK
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {(["East", "West"] as const).map((facing) => (
                  <button
                    key={facing}
                    onClick={() => onChangeFacing(facing)}
                    className={`h-11 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 ${
                      selectedFacing === facing
                        ? "bg-[#b56d42] text-white shadow-[0_12px_28px_-16px_rgba(181,109,66,0.95)]"
                        : "bg-white text-[#2f4146] border border-[#d9c7b3] hover:bg-[#fff5eb]"
                    }`}
                  >
                    {facing} Facing
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {filteredOptions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`h-20 px-3 rounded-xl border text-sm md:text-base font-semibold leading-tight transition-all duration-300 ${
                      activeId === item.id
                        ? "bg-[#254f53] border-[#254f53] text-white shadow-[0_16px_28px_-18px_rgba(37,79,83,0.95)]"
                        : "bg-[#f7ecdf] border-[#dbc8b4] text-[#2f4146] hover:bg-white"
                    }`}
                  >
                    <span className="block">{item.area}</span>
                    <span className={`block text-xs md:text-sm mt-0.5 ${activeId === item.id ? "text-white/85" : "text-[#6b7275]"}`}>
                      {item.option}
                    </span>
                  </button>
                ))}
              </div>

              <button
                onClick={handleDownloadCostSheet}
                className="mt-6 w-full h-14 rounded-xl bg-gradient-to-r from-[#b56d42] to-[#ca865d] text-white text-lg md:text-xl font-semibold inline-flex items-center justify-center gap-3 hover:brightness-105 transition-all"
              >
                Download Cost Sheet
                <CircleArrowRight size={22} />
              </button>
            </div>
          </Reveal>

          <Reveal animation="right" delay={0.1}>
            <div className="rounded-3xl border border-[#d7c7b4] bg-white/90 backdrop-blur-sm p-5 md:p-7 shadow-[0_18px_55px_-28px_rgba(43,49,64,0.45)]">
              <h3 className="font-body text-2xl md:text-3xl font-bold text-[#203137] mb-2 uppercase tracking-[0.02em]">
                {selectedBhk} BHK - {selectedFacing} Facing
              </h3>
              <p className="text-[#5b6669] mb-5 font-medium">{activeResidence.option} • {activeResidence.area}</p>
              <div className="rounded-2xl bg-[#fbf7f1] border border-[#e2d3c1] p-4 md:p-5">
                <img
                  src={activeResidence.image}
                  alt={`${selectedBhk} BHK ${selectedFacing} Facing ${activeResidence.option}`}
                  className="w-full max-h-[420px] object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ResidencesSection;