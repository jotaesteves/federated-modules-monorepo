import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'shared/components/Button';
import MemeImage from 'shared/components/MemeImage';
import SomeForm from 'shared/components/SomeForm';

const Page1: React.FC = () => (
  <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-xl font-semibold">This is page 2 of app1</h2>
    <p className="mt-1 text-sm text-slate-600">This page has a button and a meme image</p>

    <div className="mt-4">
      <Button>This is great meme</Button>
    </div>

    <div className="mt-4">
      <MemeImage />
    </div>

    <div className="mt-6">
      <p className="text-sm font-medium text-slate-700">Some form:</p>
      <div className="mt-2">
        <SomeForm />
      </div>
    </div>

    <p className="mt-6 text-sm">
      Go to{' '}
      <Link className="text-sky-600 hover:text-sky-700" to="../page-1">
        page-1
      </Link>
    </p>
  </div>
);

export default Page1;
