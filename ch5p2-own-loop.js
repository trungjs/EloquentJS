function ownLoop(start, test, update, body) {
    for(value = start; test(value); value = update(value)) {
        body(value);
    }
}
