import { useState, useCallback } from "react";

export function useImageDialog() {
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const openDialog = useCallback((images: string[]) => {
    setSelectedImages(images);
    setOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, []);

  return {
    open,
    selectedImages,
    openDialog,
    closeDialog,
    setOpen,
  };
}
