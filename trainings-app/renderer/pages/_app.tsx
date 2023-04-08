import React from "react"
import type { AppProps } from "next/app"

import "../index.css"
import { TrainerProvider } from "../providers/componentProviders/DraggableProviders/TrainerProvider"
import { FootballProvider } from "../providers/componentProviders/DraggableProviders/FootballProvider"
import { PoleProvider } from "../providers/componentProviders/DraggableProviders/PoleProvider"
import { RebouncerProvider } from "../providers/componentProviders/DraggableProviders/RebouncerProvider"
import { DummyProvider } from "../providers/componentProviders/DraggableProviders/DummyProvider"
import { ConeProvider } from "../providers/componentProviders/DraggableProviders/ConeProvider"
import { DiscConeProvider } from "../providers/componentProviders/DraggableProviders/DiskConeProvider"
import { HurdleProvider } from "../providers/componentProviders/DraggableProviders/HurdleProvider"
import { KeeperProvider } from "../providers/componentProviders/DraggableProviders/KeeperProvider"
import { GoalProvider } from "../providers/componentProviders/DraggableProviders/GoalProvider"
import { LadderProvider } from "../providers/componentProviders/DraggableProviders/LadderProvider"
import { StickProvider } from "../providers/componentProviders/DraggableProviders/StickProvider"
import { NumberProvider } from "../providers/componentProviders/DraggableProviders/NumberProvider"
import { TextProvider } from "../providers/componentProviders/DraggableProviders/TextProvider"
import { ArrowProvider } from "../providers/componentProviders/ArrowProvider"
import { DrawingProvider } from "../providers/componentProviders/DrawingProvider"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <TrainerProvider>
      <FootballProvider>
        <PoleProvider>
          <RebouncerProvider>
            <DummyProvider>
              <ConeProvider>
                <DiscConeProvider>
                  <HurdleProvider>
                    <KeeperProvider>
                      <GoalProvider>
                        <LadderProvider>
                          <StickProvider>
                            <NumberProvider>
                              <TextProvider>
                                <ArrowProvider>
                                  <DrawingProvider>
                                    <Component {...pageProps} />
                                  </DrawingProvider>
                                </ArrowProvider>
                              </TextProvider>
                            </NumberProvider>
                          </StickProvider>
                        </LadderProvider>
                      </GoalProvider>
                    </KeeperProvider>
                  </HurdleProvider>
                </DiscConeProvider>
              </ConeProvider>
            </DummyProvider>
          </RebouncerProvider>
        </PoleProvider>
      </FootballProvider>
    </TrainerProvider>
  )
}

export default App
