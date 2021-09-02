import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { increase, decrease } from '@redux/actions';
import { RootState } from '@redux/reducers';
import { useAppDispatch } from '@redux/store';
import { addBasePath } from 'next/dist/shared/lib/router/router';

export default function Counter() {
    const dispatch = useAppDispatch();
    const count = useSelector((state: RootState) => state.counter.count);
    const test = useCallback(() => {
        return addBasePath;
    }, []);
    console.log('🚀 ~ file: index.tsx ~ line 15 ~ test ~ test', test);
    return (
        <div>
            <div>
                <h2>Counter</h2>
                <button type="button" onClick={() => dispatch(increase())}>
                    +
                </button>
                <span>{count}</span>
                <button type="button" onClick={() => dispatch(decrease())}>
                    -
                </button>
            </div>
            <a
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noreferrer"
            >
                Go To Documentation
            </a>
        </div>
    );
}
