import css from "./LayoutNotes.module.css";

type LayoutNotesProps = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const LayoutNotes = ({ children, sidebar }: LayoutNotesProps) => {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
};

export default LayoutNotes;
