import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import MyButton from "./UI/button/MyButton";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput
                value={filter.query}
                placeholder='Searching for...'
                onChange={(event => setFilter({...filter, query: event.target.value}))}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <MySelect
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue='Sort by...'
                    options={[
                        {name: 'By title', value: 'title'},
                        {name: 'By body', value: 'body'},
                    ]}
                />
                <MyButton onClick={() => setFilter({...filter, query: ''})}>Clear</MyButton>
            </div>
        </div>
    );
};

export default PostFilter;