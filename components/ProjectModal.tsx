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
  const { title, des, details } = project;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent>
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
