import { builder, Builder, BuilderComponent } from '@builder.io/react';
import styles from './styles/app.css';

builder.init('081730c2771142e386170117dec3484e');

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { CtaBlock, Layout } from '@./ui';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

Builder.registerComponent(CtaBlock, {
  name: 'CtaBlock',
  noWrap: true,
  inputs: [
    { name: 'headline', type: 'text' },
    { name: 'theme', type: 'text', enum: ['light', 'dark'] },
    {
      name: 'button',
      type: 'object',
      subFields: [
        { name: 'href', type: 'url', required: true },
        { name: 'text', type: 'text', required: true },
      ],
    },
    {
      name: 'image',
      type: 'object',
      subFields: [
        {
          name: 'src',
          type: 'file',
          allowedFileTypes: ['jpeg', 'png'],
          required: true,
        },
        { name: 'alt', type: 'text' },
      ],
    },
  ],
});
