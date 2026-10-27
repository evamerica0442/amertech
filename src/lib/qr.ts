import QRCode from 'qrcode';
import { site } from '../config/site';

/**
 * Build-time WhatsApp QR code. Generated from the config WhatsApp URL with the
 * `qrcode` package — no third-party QR service, no runtime request.
 * Returns an inline SVG string (dark modules on transparent, sized for the block).
 */
export async function whatsappQrSvg(size = 168): Promise<string> {
  return QRCode.toString(site.whatsappUrl, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 1,
    width: size,
    color: { dark: '#0B1B33', light: '#00000000' },
  });
}
