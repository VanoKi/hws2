import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sorted = [...state].sort((a:UserType,b:UserType) => {
                if (a.name > b.name) return action.payload === 'up' ? 1: -1
                if (a.name < b.name) return action.payload === 'up' ? -1: 1
                return 0
            })
            return sorted // need to fix
        }
        case 'check': {

            return state.filter(item => item.age >= action.payload)
        }
        default:
            return state
    }
}
