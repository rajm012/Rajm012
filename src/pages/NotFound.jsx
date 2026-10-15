import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { useTitle } from '../lib/hooks';

export default function NotFound() {
  useTitle('Not found');
  return (
    <div className="container flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">This page doesn’t exist.</h1>
      <p className="mt-4 max-w-prose text-muted">It may have moved when the site was redesigned.</p>
      <Link to="/" className="btn btn-primary mt-8">
        Back home
        <Icon name="arrow" size={15} />
      </Link>
    </div>
  );
}
