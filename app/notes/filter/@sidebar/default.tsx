import Link from "next/link";
import css from "./SidebarNotes.module.css";
import { tagSet } from "@/lib/tagList";

const SidebarNotes = () => {
  return (
    <ul className={css.menuList}>
      {/* список тегів */}
      {tagSet.map((tag) => (
        <li className={css.menuItem} key={tag}>
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;
