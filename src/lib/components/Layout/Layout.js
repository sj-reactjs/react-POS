import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentStore } from '../../actions/app'
import './style.css'

export default function Layout() {
    const { stores, currentStore } = useSelector(state => state.app)
    const dispatch = useDispatch()
    const onStoreChange = ({ target }) => {
        dispatch(setCurrentStore(target.value))
    }
    return (
        <div>
            <header>
                <div className="active-store">Sample Store</div>
                <div className="store-dropdown">
                    <select name="" onChange={onStoreChange} value={currentStore}>
                        <option value="">Choose Store</option>
                        {stores.map(store => <option key={store.id} value={store.id}>{store.name}</option>)}
                    </select></div>
                <div className="menu">
                    <ul>
                        <li>Exit POS</li>
                        <li>Order Queue</li>
                        <li>Current Orders</li>
                        <li>Pending Orders</li>
                        <li>Manage Products</li>
                    </ul>
                </div>
            </header>
            <section className="action-menu"></section>
            <section className="container">
                <div className="category-container">
                    <CategoryList />
                </div>
                <div className="propduct-container">
                    Current selected store {
                        stores.filter(s => s.id === currentStore)?.[0]?.name
                    }
                    <Element.Div className="product-card-container">
                        {
                            Array.from(Array(100).keys()).map(product => <ProductCard key={product} />)
                        }
                    </Element.Div>

                </div>
            </section>
            <section className="cart"></section>
        </div>
    )
}

function CategoryList(props) {
    const { categories = Array.from(Array(10).keys()) } = props;
    console.log(`categories`, categories)
    return (
        <>
            <ul>
                {categories.map((category, i) => <li key={i}>Category {category}</li>)}
            </ul>
        </>
    )
}



function ProductCard(props) {
    const { propduct, image } = props;

    return (
        <>
            <Element.Div tag={`div`} className="card">
                <Element.Div tag={`div`} className="image">
                    Product Image
                </Element.Div>
                <Element.Div tag={`div`} className="title">
                    Product Name
                </Element.Div>
                <Element.Div tag={`div`} className="product-code">
                    xxxx
                </Element.Div>
                <Element.Div tag={`div`} className="product-price">
                    $0.00
                </Element.Div>
                <Element.Div tag={`div`} className="product-discount">
                    10%
                </Element.Div>
            </Element.Div>
        </>
    )
}

const Element = {
    Div: "div",
    Span: "span",
    P: "p",
    A: "a",
    Li: "li",
}
