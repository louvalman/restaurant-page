export function createStorage(namespace) {
  // private: build the prefixed key, used by all methods
  const prefix = (key) => `${namespace}:${key}`;

  const get = (key, defaultValue = null) => {
    const value = localStorage.getItem(prefix(key));
    return value === null ? defaultValue : JSON.parse(value);
  };

  const set = (key, value) => {
    localStorage.setItem(prefix(key), JSON.stringify(value));
  };

  const remove = (key) => {
    localStorage.removeItem(prefix(key));
  };

  const clear = () => {
    // Remove all keys that start with the namespace prefix
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key.startsWith(`${namespace}:`)) {
        localStorage.removeItem(key);
      }
    }
  };

  return { get, set, remove, clear };
}
