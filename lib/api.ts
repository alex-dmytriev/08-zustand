import axios from "axios";
import { NewNote, type Note } from "../types/note";

const axiosInst = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

//* === GET === *
interface FetchNotesProps {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  search: string,
  page: number,
  tag?: string | null
): Promise<FetchNotesProps> => {
  const params = {
    params: {
      page,
      search,
      perPage: 9,
      tag,
    },
  };

  const fetchNotesResponse = await axiosInst.get<FetchNotesProps>(
    "/notes",
    params
  );

  return fetchNotesResponse.data;
};

//* === GET by ID ===

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await axiosInst.get<Note>(`notes/${id}`);

  return response.data;
};

//* === CREATE === *
// interface newTaskProp {
//   title: string;
//   content: string;
//   tag: NoteTag;
// }

export const createNote = async (newTask: NewNote): Promise<Note> => {
  const createNoteResponse = await axiosInst.post<Note>("/notes", newTask);
  console.log(createNoteResponse.data);
  return createNoteResponse.data;
};

//* === DELETE === *
export const deleteNote = async (taskID: string): Promise<Note> => {
  const deleteNoteResponse = await axiosInst.delete<Note>(`notes/${taskID}`);
  return deleteNoteResponse.data;
};
