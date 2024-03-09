export const getFileExtension = (file) =>
  file.name.split(".").pop().toLowerCase();

export const getFileExtensionURL = (filename) =>
  filename.split(".").pop().toLowerCase();

export const isFileAllowed = (extensions, file) =>
  extensions.includes(getFileExtension(file));

export const isFileAllowedURL = (extensions, filename) =>
  extensions.includes(getFileExtensionURL(filename));

export const getImageMeta = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      const { src, width, height } = this;
      resolve({ src, width, height });
    };
  });
};

export function debounce(func, wait, immediate) {
  let timeout;

  return function () {
    let context = this;
    let args = arguments;

    let later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}
