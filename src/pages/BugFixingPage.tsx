import ServiceDetailPage from './ServiceDetailPage';
import { getService } from '@/data/services';

export default function BugFixingPage() {
  const service = getService('bug-fixing')!;
  return <ServiceDetailPage service={service} />;
}
