### 商品列表展示



### 从商品列表到购物车

#### 添加商品到购物车-行动

设置结帐状态

判断商品库存含量：

如果没有库存了： 什么也不做

如果还有库存： 在购物车中看看查找这个物品，如果不存在，将商品推送到购物车，如果存在，增加商品的数量。之后减少商品的库存。



#####  将商品推向购物车-变异

##### 增加商品的数量-变异

##### 减少商品的库存-变异

​	

------

### 购物车中的变化

##### 购物车中所有的商品-获得者

##### 购物车中物品总价格-获得者



### 结帐

#### 展示结账状态

成功还是失败和无状态三种。

#### 是否允许提交?

购物车没有商品时不可提交

#### 结帐-行动

##### 储存购物栏物品

保存当前购物车物品，后面还有用

##### 设置结帐状态-变异

无状态

##### 设置购物栏物品-变异 

清空购物栏

##### 购买商品

调用商店购物api，假设就是真的向数据库发送请求了。发起购物请求，处理实际的购物。

成功： 设置结帐状态-变异

失败： 设置结帐状态-变异。并将保存的购物车物品重新放到购物车

> 这里展示到界面的物品们，和在模块状态中保存的物品的区别是什么？对象里面的属性不一样，products里有这些属性title, price, quantity，而state.items里有id和quantity。实际用来发送购买请求的是products，页面展示即视图层view的也是products，而在模块中状态储存的是state.items。因为用户看到的就是要买的东西products，所以实际发送的购物请求也用的这个produtcs。至于购物车用状态中的items，是因为重新更新了状态中items后，在获得者cartProducts里会将Items中每个item和rootState中的商品进行校对检查，假如某个物品卖完了，那就可以直接更新，是这个道理。

