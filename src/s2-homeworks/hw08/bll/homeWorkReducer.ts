import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const copy = [...state]
            copy.sort((a,b)=> {
               const res:number = a.name<b.name?-1:a.name>b.name?1:0
                return action.payload==="up"?res:-res
            })
            return copy  // need to fix
        }
        case 'check': {

            return state.filter(a=>a.age>=18) // need to fix
        }
        default:
            return state
    }
}
