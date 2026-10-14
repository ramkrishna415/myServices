import ServiceDetailPage from './ServiceDetailPage';
import { getService } from '@/data/services';

export default function AIChatbotPage() {
  const service = getService('ai-chatbot-development')!;
  return <ServiceDetailPage service={service} />;
}
