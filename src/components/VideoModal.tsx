
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const VideoModal = ({ open, onOpenChange }: VideoModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-2xl w-full overflow-hidden p-0 bg-black">
      <div className="w-full aspect-video bg-black">
        <iframe
          src="https://www.youtube.com/embed/Bc2q06VhKIs?autoplay=1&controls=1&modestbranding=1&showinfo=0"
          title="Demo Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </DialogContent>
  </Dialog>
);
