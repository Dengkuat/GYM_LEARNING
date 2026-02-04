Props = external

State = internal

**Props**

- This are read only components that cannot be changed on its own, incase the props change then the component re-renders they come from the parent to the child

**State**

- This live inside the component
- Owned and controlled by the component
- Can be updated using setState/ UseState
- When state changes then the component re-renders

NOTE: The component that owns the data should be the one that manages the state

**Comparison Props & States**

| **Aspect** | **Props** | **State** |
| --- | --- | --- |
| ownership | parents | component |
| Mutability | Immutable | Mutable |
| Direction | one-way (down) | Local |
| Purpose | Configuration and communication | Dynamic data |
| Who updates it | Parents | Components |

**Props change vs State change**

**Props change**

- Cause by parent re-render
- Child does not control it

eg-theme, user data, configuration

**State change** 

- Cause by component logic
- Component controls it

eg-form input, toggle, counter