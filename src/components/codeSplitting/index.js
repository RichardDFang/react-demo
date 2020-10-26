import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
}

export default MyComponent;