import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;
  const { title, des, details, img } = project;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent>
        <div className="border border-slate-500 rounded-t-xl pt-4 mt-6 mb-3">
          <img src={img} alt={title} />
        </div>
        <div>
          <div className="flex gap-3">
            <div className="border border-slate-800 hover:cursor-pointer pt-2 hover:border-purple hover:-translate-y-2 transition-all duration-300 rounded-t-md">
              <img src={img} alt={title} />
            </div>
            <div className="border border-slate-800 hover:cursor-pointer pt-2 hover:border-purple hover:-translate-y-2 transition-all duration-300 rounded-t-md">
              <img src={img} alt={title} />
            </div>
            <div className="border border-slate-800 hover:cursor-pointer pt-2 hover:border-purple hover:-translate-y-2 transition-all duration-300 rounded-t-md">
              <img src={img} alt={title} />
            </div>
          </div>
        </div>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold mt-5">{title}</DialogTitle>
          <DialogDescription>{des}</DialogDescription>

          <div>
            <p>
              <strong>Role:</strong>
              {details.role}
            </p>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
