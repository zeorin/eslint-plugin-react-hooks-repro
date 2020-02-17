import React, { useMemo } from 'react';

function Foo({ component: Component }) {
	// Suppose that this is expensive to compute
	const memoized = useMemo(() => ({
		render: () => <Component />
	}), [Component]);

	return memoized.render();
}

export default Foo;
