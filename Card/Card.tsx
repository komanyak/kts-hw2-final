import React from 'react';
import classNames from 'classnames';
import Text from '../Text';
import '../variables.css';
import './Card.css';

export type CardProps = {
  /** Дополнительный classname */
  className?: string;
  /** URL изображения */
  image: string;
  /** Слот над заголовком */
  captionSlot?: React.ReactNode;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Описание карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  contentSlot?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
  /** Слот для действия */
  actionSlot?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  className,
  image,
  captionSlot,
  title,
  subtitle,
  contentSlot,
  onClick,
  actionSlot,
}) => {
  return (
    <div className={classNames('card', className)} onClick={onClick}>
      {/* Изображение */}
      <div className="card-image">
        <img src={image} alt="card" />
      </div>

      {/* Контент карточки */}
      <div className="card-body">
        {captionSlot && (
          <Text
            view="p-14"
            color="secondary"
            weight="medium"
            className="caption-slot"
          >
            {captionSlot}
          </Text>
        )}
        <Text
          view="p-20"
          color="primary"
          weight="medium"
          maxLines={2}
          className="card-title"
        >
          {title}
        </Text>
        <Text
          view="p-16"
          color="secondary"
          weight="normal"
          maxLines={3}
          className="card-subtitle"
        >
          {subtitle}
        </Text>
      </div>
      {/* Футер карточки */}
      {(contentSlot || actionSlot) && (
        <div className="card-footer">
          {contentSlot && (
            <Text
              view="p-18"
              weight="bold"
              color="primary"
              className="card-content-slot"
            >
              {contentSlot}
            </Text>
          )}
          {actionSlot && <div className="card-action">{actionSlot}</div>}
        </div>
      )}
    </div>
  );
};

export default Card;
