"use client";

import { useParams, useRouter } from "next/navigation";
import css from "./NotePreview.module.css";
import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const NotePreview = () => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  const { id } = useParams<{ id: string }>();
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <Modal onClose={handleClose}>
      {note && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2 className={css.title}>{note?.title}</h2>
              <span className={css.tag}>{note.tag}</span>
            </div>
            <p className={css.content}>{note?.content}</p>
            <div className={css.modalFooter}>
              <p className={css.date}>{note?.createdAt}</p>
              <button
                type="button"
                className={css.backBtn}
                onClick={handleClose}
                aria-label="Close preview and go back"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something weng wrong... Try again later.</p>}
    </Modal>
  );
};

export default NotePreview;
