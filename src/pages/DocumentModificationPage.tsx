import ServiceDetailPage from './ServiceDetailPage';
import { getService } from '@/data/services';

export default function DocumentModificationPage() {
  const service = getService('document-modification')!;
  return <ServiceDetailPage service={service} />;
}
