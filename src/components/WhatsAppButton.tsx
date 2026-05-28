import WhatsAppIcon from './WhatsAppIcon';
import { useSite } from '../context/SiteContext';
export default function WhatsAppButton() {
  const { data } = useSite();
  return (
    <a href={`https://wa.me/${data.contact.whatsapp}?text=Hello%20Optimum%20Prime%20Solutions`} target="_blank" rel="noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-[#25D366]/30 hover:bg-[#1DA851] transition-all hover:scale-105">
      <WhatsAppIcon className="h-5 w-5 text-white" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
