import { watch} from 'vue'

export function useWatchCharacters(valueToWatch) {
    watch(valueToWatch, (newValue) => {
        if (newValue.length === 1001) {
          alert('It is best practice to keep your notes short and tidy :)')
        }
      })
}