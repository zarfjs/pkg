import { test, expect, it } from "vitest";
import * as nodeFetch from "node-fetch"
import { sayHello } from '../src'

// eslint-disable-next-line
(globalThis as any).fetch = nodeFetch.default;
// eslint-disable-next-line
(globalThis as any).Request = nodeFetch.Request;
// eslint-disable-next-line
(globalThis as any).Headers = nodeFetch.Headers;
// eslint-disable-next-line
(globalThis as any).Response = nodeFetch.Response;

test("pkg", async () => {
    test("hello", async () => {
        it('sayHello should return the provided name with a hello', () => {
            expect(sayHello("John")).toEqual("1");
        } )
    })
});
