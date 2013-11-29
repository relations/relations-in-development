describe("For condition qq and qq", function () {
    it("it should return true when input is 12 12 12 12", function () {
        expect(condition_qq_qq(12, 12, 12, 12)).toBe(true);
    });
    it("it should return false when input is 12 13 12 12", function () {
        expect(condition_qq_qq(12, 12, 12, 13)).toBe(false);
    });
});

describe("For condition pq and qq", function () {
    it("it should return true when input is 11 12 12 12", function () {
        expect(condition_pq_qq(11, 12, 12, 12)).toBe(true);
    });
    it("it should return true when input is 12 11 12 12", function () {
        expect(condition_pq_qq(12, 11, 12, 12)).toBe(true);
    });
    it("it should return false when input is 12 12 12 12", function () {
        expect(condition_pq_qq(12, 12, 12, 12)).toBe(false);
    });
    it("it should return false when input is 11 12 11 12", function () {
        expect(condition_pq_qq(11, 12, 11, 12)).toBe(false);
    });
    it("it should return false when input is 12 11 11 12", function () {
        expect(condition_pq_qq(12, 11, 11, 12)).toBe(false);
    });
    it("it should return false when input is 11 12 11 13", function () {
        expect(condition_pq_qq(11, 12, 11, 13)).toBe(false);
    });
    it("it should return false when input is 11 12 12 13", function () {
        expect(condition_pq_qq(11, 12, 12, 13)).toBe(false);
    });
});

describe("For condition qq and qr", function () {
    it("it should return true when input is 12 12 12 11", function () {
        expect(condition_qq_qr(12, 12, 12, 1)).toBe(true);
    });
    it("it should return true when input is 12 12 11 12", function () {
        expect(condition_qq_qr(12, 12, 11, 12)).toBe(true);
    });
    it("it should return false when input is 12 12 12 12", function () {
        expect(condition_qq_qr(12, 12, 12, 12)).toBe(false);
    });
    it("it should return false when input is 11 12 11 12", function () {
        expect(condition_qq_qr(11, 12, 11, 12)).toBe(false);
    });
    it("it should return false when input is 12 11 11 12", function () {
        expect(condition_qq_qr(12, 11, 11, 12)).toBe(false);
    });
    it("it should return false when input is 11 12 11 13", function () {
        expect(condition_qq_qr(11, 12, 11, 13)).toBe(false);
    });
    it("it should return false when input is 11 12 12 13", function () {
        expect(condition_qq_qr(11, 12, 12, 13)).toBe(false);
    });
});

describe("For condition pq and pq", function () {
    it("it should return true when input is 11 12 11 12", function () {
        expect(condition_pq_pq(11, 12, 11, 12)).toBe(true);
    });
    it("it should return true when input is 12 11 11 12", function () {
        expect(condition_pq_pq(12, 11, 11, 12)).toBe(true);
    });
    it("it should return false when input is 12 12 11 12", function () {
        expect(condition_pq_pq(12, 12, 11, 12)).toBe(false);
    });
    it("it should return false when input is 11 12 12 12", function () {
        expect(condition_pq_pq(11, 12, 12, 12)).toBe(false);
    });
    it("it should return false when input is 11 12 11 13", function () {
        expect(condition_pq_pq(11, 12, 11, 13)).toBe(false);
    });
    it("it should return false when input is 11 12 12 13", function () {
        expect(condition_pq_pq(11, 12, 12, 13)).toBe(false);
    });
    it("it should return false when input is 12 12 12 12", function () {
        expect(condition_pq_pq(12, 12, 12, 12)).toBe(false);
    });
});

describe("For condition pq and qr", function () {
    it("it should return true when input is 11 12 12 13", function () {
        expect(condition_pq_qr(11, 12, 12, 13)).toBe(true);
    });
    it("it should return true when input is 11 12 11 13", function () {
        expect(condition_pq_qr(11, 12, 11, 13)).toBe(true);
    });
    it("it should return true when input is 11 12 13 11", function () {
        expect(condition_pq_qr(11, 12, 13, 11)).toBe(true);
    });
    it("it should return true when input is 11 12 13 12", function () {
        expect(condition_pq_qr(11, 12, 13, 12)).toBe(true);
    });
    it("it should return false when input is 11 12 11 12", function () {
        expect(condition_pq_qr(11, 12, 11, 12)).toBe(false);
    });
    it("it should return false when input is 12 11 11 12", function () {
        expect(condition_pq_qr(12, 11, 11, 12)).toBe(false);
    });
    it("it should return false when input is 12 12 11 12", function () {
        expect(condition_pq_qr(12, 12, 11, 12)).toBe(false);
    });
    it("it should return false when input is 11 12 12 12", function () {
        expect(condition_pq_qr(11, 12, 12, 12)).toBe(false);
    });
    it("it should return false when input is 12 12 12 12", function () {
        expect(condition_pq_qr(12, 12, 12, 12)).toBe(false);
    });
});