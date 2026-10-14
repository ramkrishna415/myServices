import ServiceDetailPage from './ServiceDetailPage';
import { getService } from '@/data/services';

export default function WebsiteDevelopmentPage() {
  const service = getService('website-development')!;
  return <ServiceDetailPage service={service} />;
}
