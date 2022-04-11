import http from "~/api-client";
export class ApiProviderService {
    getAllNotes(): Promise<any> {
      return http.get("/notes");
    }
    getNote(key: any): Promise<any> {
      return http.get(`/notes/${key}`);
    }
    createNote(data: any): Promise<any> {
      return http.post("/notes", data);
    }
    updateNote(key: any, data: any): Promise<any> {
      return http.put(`/notes/${key}`, data);
    }
    deleteNote(key: any): Promise<any> {
      return http.delete(`/notes/${key}`);
    }
}