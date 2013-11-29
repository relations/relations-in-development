describe("condition pp pp", function () {
    it("should return true when input is 10 10 10 10", function () {
        expect(condition_pp_pp(10, 10, 10, 10)).toBe(true);
    });
    it("should return false when input is 10 10 10 11", function () {
        expect(condition_pp_pp(10, 10, 10, 11)).toBe(false);
    });
});

describe("condtion pp pq", function () {
    it("should return true when input is 10 10 10 12", function () {
        expect(condition_pp_pq(10, 10, 10, 12)).toBe(true);
    });
    it("should return true when input is 10 10 12 10", function () {
        expect(condition_pp_pq(10, 10, 12, 10)).toBe(true);
    });
    it("should return true when input is 10 10 10 10", function () {
        expect(condition_pp_pq(10, 10, 10, 10)).toBe(false);
    });
});

describe("condition pp qq", function () {
    it("should return true when input 10 10 12 12", function () {
        expect(condition_pp_qq(10, 10, 12, 12)).toBe(true);
    });
    it("should return false when input 10 10 10 12", function () {
        expect(condition_pp_qq(10, 10, 10, 12)).toBe(false);
    });
    it("should return false when input 10 10 11 12", function () {
        expect(condition_pp_qq(10, 10, 11, 12)).toBe(false);
    });
});

describe("condition pp qr", function () {
    it("should return true when input 10 10 12 13", function () {
        expect(condition_pp_qr(10, 10, 12, 13)).toBe(true);
    });
    it("should return false when input 10 10 12 12", function () {
        expect(condition_pp_qr(10, 10, 12, 12)).toBe(false);
    });
    it("should return false when input 10 10 10 12", function () {
        expect(condition_pp_qr(10, 10, 10, 12)).toBe(false);
    });
});

describe("condtion pq pp/qq", function () {
    it("should return true when input is 10 11 10 10", function () {
        expect(condition_pq_pp_or_qq(10, 11, 10, 10)).toBe(true);
    });
    it("should return true when input is 11 10 10 10", function () {
        expect(condition_pq_pp_or_qq(11, 10, 10, 10)).toBe(true);
    });
    it("should return false when input is 11 11 10 10", function () {
        expect(condition_pq_pp_or_qq(11, 11, 10, 10)).toBe(false);
    });
})

describe("condition pq pq", function () {
    it("should return true when input is 10 11 10 11", function () {
        expect(condition_pq_pq(10, 11, 10, 11)).toBe(true);
    });
    it("should return true when input is 11 10 10 11", function () {
        expect(condition_pq_pq(11, 10, 10, 11)).toBe(true);
    });
    it("should return false when input is 10 10 10 11", function () {
        expect(condition_pq_pq(10, 10, 10, 11)).toBe(false);
    });
    it("should return false when input is 10 10 10 10", function () {
        expect(condition_pq_pq(10, 10, 10, 10)).toBe(false);
    });
});

describe("condition pq pr", function () {
    it("should return true when input is 10 11 10 12", function () {
        expect(condition_pq_pr_or_qr(10, 11, 10, 12)).toBe(true);
    });
    it("should return true when input is 11 10 10 12", function () {
        expect(condition_pq_pr_or_qr(11, 10, 10, 12)).toBe(true);
    });
    it("should return false when input is 10 10 10 12", function () {
        expect(condition_pq_pr_or_qr(10, 10, 10, 12)).toBe(false);
    });
});

describe("condition pq rr", function () {
    it("should return true when input is 10 12 13 13", function () {
        expect(condition_pq_rr(10, 12, 13, 13)).toBe(true);
    });
});

describe("condition pq rs", function () {
    it("should return true when input is 10 12 13 14", function () {
        expect(condition_pq_rs(10, 12, 13, 14)).toBe(true);
    });
});