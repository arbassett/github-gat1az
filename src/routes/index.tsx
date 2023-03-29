import { createSignal, onMount } from 'solid-js';
import { Title } from 'solid-start';
import Counter from '~/components/Counter';
import { client } from '~/lib/trpc';

export default function Home() {
  const [trpcRes, setTrpcRes] = createSignal('');
  onMount(async () => {
    const res = await client.nestedRouter.nested.nestedHello.query('trpc');
    console.log(res);
    setTrpcRes(res);
  });

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <div>trpc response {trpcRes()}</div>
      <Counter />
      <p>
        Visit{' '}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{' '}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
