import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

import { HomeBestDetailCartStyle as s } from '@/pages/HomeBestDetailCart/HomeBestDetailCart.style';
import Icon from '@/components/Icon';
import CartBottomNav from '@/components/BottomNav/CartBottomNav';
import Floater from '@/components/Floater/Floater';
import FirstCartView from '@/pages/HomeBestDetailCart/FirstCartView/FirstCartView';
import SecondCartView from '@/pages/HomeBestDetailCart/SecondCartView/SecondCartView';
import ThirdCartView from '@/pages/HomeBestDetailCart/ThirdCartView/ThirdCartView';
import FourthCartView from '@/pages/HomeBestDetailCart/FourthCartView/ForthCartView';
import routePath from '@/routes/routePath';
import { useGetBookDetail } from '@/apis/homeBestDetail/queries';
import Divider from '@/components/Divider/Divider';

const HomeBestDetailCart = () => {
  const navigate = useNavigate();
  const { bookId } = useParams<{ bookId: string }>();

  const numericBookId = Number(bookId || '0');
  const { data: bookDetailData } = useGetBookDetail(numericBookId);

  const [totalPrice, setTotalPrice] = useState(0);

  if (!bookId || isNaN(numericBookId)) {
    return <div>잘못된 접근입니다.</div>;
  }

  const handleBack = () => navigate(`/best/detail/${bookId}`);
  const handleHome = () => navigate(routePath.HOME);

  return (
    <div css={s.Wrapper}>
      <header css={s.Header}>
        <div css={s.headerTop}>
          <div css={s.leftButtons}>
            <button onClick={handleBack} css={s.iconButton}>
              <Icon name="left" width={28} height={28} />
            </button>
            <button onClick={handleHome} css={s.iconButton}>
              <Icon name="home2" width={28} height={28} />
            </button>
          </div>
          <h1 css={s.cartTitle}>장바구니 (1)</h1>
          <button css={s.switchButton}>
            <Icon name="change" width={20} height={20} />
            <span>바로드림만</span>
          </button>
        </div>
      </header>

      <div css={s.emptpyContainer} />

      <div css={s.subHeader}>
        <div css={s.checkArea}>
          <Icon name="check" width={24} height={24} />
          <span>전체</span>
        </div>
        <div css={s.iconGroup}>
          <button css={s.placeButton}>
            <Icon name="mapFill" width={14} height={14} />
            <span>기준배송지</span>
          </button>
          <button css={s.iconOnly}>
            <Icon name="wish" width={16} height={16} />
          </button>
          <button css={s.iconOnly}>
            <Icon name="trash" width={16} height={16} />
          </button>
          <button css={s.iconOnly}>
            <Icon name="viewDetail" width={16} height={16} />
          </button>
        </div>
      </div>

      <div css={s.tabChipWrapper}>
        <button css={s.kyoboChip}>교보문고</button>
      </div>

      <main css={s.Body}>
        <FirstCartView bookData={bookDetailData} onTotalPriceChange={setTotalPrice} />
        <Divider />

        <SecondCartView />
        <Divider />

        <ThirdCartView />
        <Divider />
        <FourthCartView />
      </main>
      <Floater />
      <CartBottomNav totalPrice={totalPrice} />
    </div>
  );
};

export default HomeBestDetailCart;
