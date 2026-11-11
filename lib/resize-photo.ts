// Shrinks a customer's photo on their phone before upload: JPEG, longest side 1600px.
// Re-drawing on a canvas also drops the photo's metadata (including GPS location).

const MAX_SIDE = 1600;

/** Resolves to a "data:image/jpeg;base64,…" URL, or null if the browser can't read the file (e.g. HEIC on Android). */
export async function resizePhoto(file: File, quality = 0.72): Promise<string | null> {
  try {
    const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
    const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    return canvas.toDataURL("image/jpeg", quality);
  } catch {
    return null;
  }
}
