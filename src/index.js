class Sorter {
  constructor() {
      this.arr = [];
      this._cmp = function(a, b) {
        return a - b;
      };
      this._length = 0;
  }

  add(v) {
      this.arr.push(v);
      this._length++;
  }
  sort(indexes) {
      const values = [];
      for (var i=0;i<indexes.length;i++) {
          values.push(this.arr[indexes[i]]);
      }
      values.sort(this._cmp);
      indexes.sort(function(a, b) {
        return a - b;
      });
      for (var i=0;i<indexes.length;i++) {
          this.arr[indexes[i]] = values[i];
      }
  }
  toArray() {
      return this.arr;
  }
  setComparator(cmp) {
      this._cmp = cmp;
  }
  get length() {
    return this._length;
  }

  at(i){
    return this.arr[i];
  }
}
module.exports = Sorter;