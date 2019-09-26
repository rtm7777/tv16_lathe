class Storage {
  getItem = (key: string): string => localStorage.getItem(key)

  getNumbersArray = (key: string): number[] => {
    const value = this.getItem(key)
    if (value) return value.split(',').map(Number)
    return []
  }

  setItem = (key: string, value: string): void => localStorage.setItem(key, value)
}

const storage = new Storage()

export default storage
