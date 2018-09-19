const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const ItemListView = function (container) {
  this.container = container;
};

ItemListView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

ItemListView.prototype.render = function (items) {
  this.container.innerHTML = '';
  const itemView = new ItemView(this.container);
  items.forEach((item) => itemView.render(item));
};

module.exports = ItemListView;
