import React from 'react';

import { Button } from '@components';

export const Main: React.FC = () => {
    return (
        <div className="text-center font-light py-5 bg-gray-700">
            <div className="container mx-auto">
                <h1 className="text-white text-8xl mb-2">superplate</h1>
                <p className="text-lg text-white mb-3">
                    The frontend boilerplate with superpowers!
                </p>
                <Button type="button">
                    <a
                        href="https://pankod.github.io/superplate/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Docs
                    </a>
                </Button>
            </div>
        </div>
    );
};
