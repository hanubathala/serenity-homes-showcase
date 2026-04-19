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
    <section id="residences" className="py-20 md:py-22 px-6 overflow-hidden bg-[#efe7db]">
      <div className="container mx-auto max-w-6xl">
        <Reveal animation="up">
          <div style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.5rem", fontWeight: "bold" }}>SWASTI SRI SERENITY Price</div>
        </Reveal>
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-10 items-start">
          <Reveal animation="left">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1f2937] mb-8">All Residences</h2>

            <div className="grid grid-cols-2 gap-3 mb-3">
              {(["1.5", "2.5"] as const).map((bhk) => (
                <button
                  key={bhk}
                  onClick={() => onChangeBhk(bhk)}
                  className={`h-12 rounded-md text-sm md:text-base font-semibold transition-colors ${
                    selectedBhk === bhk
                      ? "bg-[#0f172a] text-white"
                      : "bg-white text-[#1f2937] border border-[#cfd4dc] hover:bg-[#f8fbff]"
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
                  className={`h-11 rounded-md text-sm md:text-base font-semibold transition-colors ${
                    selectedFacing === facing
                      ? "bg-[#2ea6de] text-white"
                      : "bg-[#ffffff] text-[#1f2937] border border-[#cfd4dc] hover:bg-[#f8fbff]"
                  }`}
                >
                  {facing} Facing
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-[#5b5d61] border border-[#5b5d61]">
              {filteredOptions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`h-16 px-3 text-sm md:text-lg font-semibold leading-tight transition-colors ${
                    activeId === item.id
                      ? "bg-[#2ea6de] text-white"
                      : "bg-[#2f3134] text-white hover:bg-[#3b3e42]"
                  }`}
                >
                  <span className="block">{item.area}</span>
                  <span className="block text-xs md:text-sm text-white/90 mt-0.5">{item.option}</span>
                </button>
              ))}
            </div>

            <button
              onClick={handleDownloadCostSheet}
              className="mt-6 w-full h-14 bg-[#2ea6de] text-white text-xl font-semibold inline-flex items-center justify-center gap-3 hover:bg-[#239ad1] transition-colors"
            >
              Download Cost Sheet
              <CircleArrowRight size={22} />
            </button>
          </div>
          </Reveal>

          <Reveal animation="right" delay={0.1}>
            <div>
            <h3 className="font-body text-3xl font-bold text-[#1f2937] mb-2 uppercase">
              {selectedBhk} BHK - {selectedFacing} Facing
            </h3>
            <p className="text-[#4b5563] mb-5 font-medium">{activeResidence.option} • {activeResidence.area}</p>
            <div className="bg-white border-2 border-[#d8d8d8] p-5">
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