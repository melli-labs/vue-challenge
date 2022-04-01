import { ref } from "vue";
import { useFetch } from "@vueuse/core";

export default function useNotes() {
  const error = ref(null);
  const notes = ref([]);
  const isFetching = ref(true);
  const baseUrl = ref(`https://emilia-vue-challenge.deta.dev/notes`);
  const refetch = { refetch: true };
  const fetchData = async (url, options, refetch) => {
    console.log("fecthing data");
    try {
      const notesResponse = await useFetch(url, options, refetch).json();
      notes.value = await notesResponse.data.value;
      isFetching.value = false;
    } catch (e) {
      error.value = e;
    }
  };
  return { notes, error, fetchData, isFetching, baseUrl, refetch };
}
