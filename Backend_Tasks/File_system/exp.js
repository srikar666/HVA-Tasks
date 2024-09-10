const create=require('./Create')
const Read=require('./Read')
const append=require('./Append')
const delet=require('./Delete')
const name='creta2024.txt'
const note='abcdef'
const note1='ghijk'
create(name,note )
Read(name)
append(name,note1)
Read(name)
//delet(name)