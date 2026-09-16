import Link from 'next/link';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Link> & { back?: boolean };

// Keep existing callers compatible while navigation uses ordinary links.
export default function TransitionLink({ back, ...props }: Props) {
    return <Link {...props} href={back ? '/#selected-projects' : props.href} />;
}
