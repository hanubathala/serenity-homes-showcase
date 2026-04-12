import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Plus, Minus, RotateCcw } from "lucide-react";

interface LightBoxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const LightBox = ({ isOpen, images, currentIndex, onClose, onNext, onPrev }: LightBoxProps) => {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!isOpen) return;
    setZoom(1);
  }, [isOpen, currentIndex]);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 1));
  const handleResetZoom = () => setZoom(1);

  const handleWheelZoom = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoom((prev) => Math.min(prev + 0.1, 3));
    } else {
      setZoom((prev) => Math.max(prev - 0.1, 1));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="absolute top-6 left-6 z-10 flex items-center gap-2 rounded-full bg-black/60 border border-white/20 p-1.5">
        <button
          onClick={handleZoomOut}
          className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
          aria-label="Zoom out"
        >
          <Minus size={18} />
        </button>
        <span className="text-xs font-semibold text-white min-w-14 text-center">{Math.round(zoom * 100)}%</span>
        <button
          onClick={handleZoomIn}
          className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
          aria-label="Zoom in"
        >
          <Plus size={18} />
        </button>
        <button
          onClick={handleResetZoom}
          className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
          aria-label="Reset zoom"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-auto" onWheel={handleWheelZoom}>
        <div className="w-full h-full min-h-[50vh] flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg transition-transform duration-200"
            style={{ transform: `scale(${zoom})` }}
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-gray-300 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={onNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-gray-300 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
          </>
        )}

        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default LightBox;
