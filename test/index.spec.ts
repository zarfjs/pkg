import { test, expect, it } from "vitest";
import * as nodeFetch from "node-fetch"
import { sayHello } from '../src'

(globalThis as any).fetch = nodeFetch.default;
(globalThis as any).Request = nodeFetch.Request;
(globalThis as any).Headers = nodeFetch.Headers;
(globalThis as any).Response = nodeFetch.Response;

test("pkg", async () => {
    test("hello", async () => {
        it('sayHello should return the provided name with a hello', () => {
            expect(sayHello("John")).toEqual("1");
        } )
    })
});
