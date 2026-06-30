/**
 * Builds a full Uploadcare CDN URL from a bare UUID.
 *
 * - New accounts (after Sep 4, 2025) use a project-specific subdomain:
 *     https://<subdomain>.ucarecd.net/<uuid>/
 *   Set NEXT_PUBLIC_UPLOAD_CARE_CDN_BASE in .env to your subdomain URL,
 *   e.g. https://abc123.ucarecd.net
 *   Find your subdomain at: https://app.uploadcare.com/projects/-/settings/#delivery
 *
 * - Legacy accounts (before Sep 4, 2025) still use:
 *     https://ucarecdn.com/<uuid>/
 */
export function getUploadcareUrl(uuid: string | null | undefined): string {
  if (!uuid) return ''
  const base =
    process.env.NEXT_PUBLIC_UPLOAD_CARE_CDN_BASE?.replace(/\/$/, '') ??
    'https://ucarecdn.com'
  return `${base}/${uuid}/`
}
