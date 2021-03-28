import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (data: any) => void;
  editingFood: Food | undefined;
}

export default function ModalEditFood(props: Props) {
  const formRef = useRef();
  const { isOpen, setIsOpen, handleUpdateFood, editingFood } = props;

  async function handleSubmit(data: any) {
    handleUpdateFood(data);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form
        ref={formRef.current}
        onSubmit={handleSubmit}
        initialData={editingFood}
      >
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
